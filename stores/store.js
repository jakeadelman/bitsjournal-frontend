import { action, observable } from "mobx";
import { useStaticRendering, observer } from "mobx-react";
import { create, persist } from "mobx-persist";
import { createContext } from "react";
import {
  getStateDate,
  makeDateHrs,
  makeDateDays,
} from "../components/Helpers/Functions";

const isServer = !process.browser;
useStaticRendering(isServer);

export class Store {
  @observable lastUpdate = 0;
  @persist @observable light = true;
  @persist @observable isAuth = false;
  @persist @observable startDate = null;
  @persist @observable endDate = null;
  @persist @observable symbol = "XBTUSD";

  @persist @observable date = "Today";
  @observable pnl = 0;
  @observable globalHash = [];
  @persist @observable tempNotes = [];
  @persist @observable tempTags = [];
  @persist @observable hasTempTags = false;

  @persist @observable singleTrade = {};
  @persist @observable hasSingleTrade = false;
  @persist @observable isSingleNotes = false;

  @action changeDate = (newDate) => {
    let dates = getStateDate(newDate);
    this.date = newDate;
    this.startDate = dates.start;
    this.endDate = dates.end;
  };

  @action addPnl = (pnl) => {
    this.pnl += pnl;
  };

  @action resetPnl = () => {
    this.pnl = 0;
  };

  @action pushGlobalHash = (hash) => {
    this.globalHash.push(hash);
  };

  @action addTempNote = (time, note) => {
    if (this.tempNotes[0] == undefined) {
      let newNote = {};
      newNote["note"] = note;
      newNote["time"] = time;
      this.tempNotes.push(newNote);
    } else {
      let alreadyPresentNote = false;
      for (let i = 0; i < this.tempNotes.length; i++) {
        if (this.tempNotes[i].time == time) {
          this.tempNotes[i].note = note;
          alreadyPresentNote = true;
        }
        if (i == this.tempNotes.length - 1 && alreadyPresentNote == false) {
          let newNote = {};
          newNote["note"] = note;
          newNote["time"] = time;
          this.tempNotes.push(newNote);
        }
      }
    }
  };

  @action clearTempNotes = () => {
    this.tempNotes = [];
  };

  @action addTempTag = (time, tag) => {
    let newTag = {};
    newTag["tag"] = tag;
    newTag["time"] = time;
    this.tempTags.push(newTag);
    this.changeHasTempTags();
  };

  @action clearTempTags = () => {
    this.tempTags = [];
  };

  @action changeHasTempTags = () => {
    this.hasTempTags = true;
  };
  @action resetHasTempTags = () => {
    this.hasTempTags = false;
  };
  @action setSymbol = (newSymbol) => {
    this.symbol = newSymbol;
  };

  @action resetPnl = () => {
    this.pnl = 0;
  };

  @action setSingleTrade = (dat) => {
    this.singleTrade = dat;
  };
}

let store = null;
export const hydrate = create();
export const StoreContext = createContext(new Store());

export function initializeStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new Store(isServer, initialData);
  }
  if (store === null) {
    store = new Store(isServer, initialData);
  }

  hydrate("store", store).then(() => {
    console.log("someStore has been hydrated");
  });

  return store;
}
