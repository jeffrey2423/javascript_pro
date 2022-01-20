import { Ad } from "../interfaces/Ad";
import { jsonAds } from "./ads.json";

export class Ads {
  private static instance: Ads;
  private ads: Ad[];

  private constructor() {
    this.initAds();
  }

  static getIntance() {
    if (!Ads.instance) {
      Ads.instance = new Ads();
    }

    return Ads.instance;
  }

  private initAds() {
    this.ads = [...jsonAds];
  }

  getAd() {
    if (this.ads.length === 0) {
      this.initAds();
    }
    return this.ads.pop();
  }
}
