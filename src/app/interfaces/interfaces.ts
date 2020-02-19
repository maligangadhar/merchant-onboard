import { EventEmitter } from '@angular/core';

export interface IBroadcastService {
  broadcast: (key: string, data: any) => void;
  DataChange: EventEmitter<any>;
  clear: () => void;
}

export interface ICacheService {
  _cacheSPSearchData: any;
  _cacheSPDetailData: any;
}
