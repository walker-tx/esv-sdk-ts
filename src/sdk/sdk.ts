/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Passages } from "./passages.js";

export class Esv extends ClientSDK {
  private _passages?: Passages;
  get passages(): Passages {
    return (this._passages ??= new Passages(this._options));
  }
}
