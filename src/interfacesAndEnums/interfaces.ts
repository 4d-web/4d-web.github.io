export enum ECrashAviatorStatus {
  FLY = 2,
  CRASH = 3,
  WAITING = 1,
}

export enum ECrashAviatorMessage {
  WAITING = 'WAITING',
}

export enum ECrashAviatorMembersStatus {
  ACTIVE = 'ACTIVE',
  WIN = 'WIN',
  LOST = 'LOST',
}

export interface ICrashAviatorData {
  t: number; //  1 - данные игроков | 2 - данные игры
  // статус 1 - ожидание, 2 - летим, 3 - упали
  st?: ECrashAviatorStatus;
  // текущий коэффициент
  sc?: number;
  // время в сек обратный отсчет
  tm?: number;
  // всего игроков
  count?: number;
  // сумма ставок
  bets?: number;
  // сумма выигрышей
  win?: number;
  // игроки
  members?: ICrashAviatorMembers[];
}

export interface ICrashAviatorMembersData {
  // всего игроков
  count: number;
  // сумма ставок
  bets: number;
  // сумма выигрышей
  win: number;
}

export interface ICrashAviatorMembers {
  // id
  id: string;
  // имя
  name: string;
  // ставка
  bet: number;
  // коэффициент
  score: number;
  // статус в игре
  status: ECrashAviatorMembersStatus;
}

export interface ICrashAviatorBet {
  type: 'start' | 'stop';
  // сумма ставки если start
  sum?: number;
  // порог если start
  hold?: number;
}

export interface IArgAndNumberMap {
  [name: string]: {
    [name: number]: number;
  };
}

export enum EAxis {
  X = 'X',
  Y = 'Y',
}
