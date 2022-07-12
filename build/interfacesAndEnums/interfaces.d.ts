export declare enum ECrashAviatorStatus {
    FLY = 2,
    CRASH = 3,
    WAITING = 1
}
export declare enum ECrashAviatorMessage {
    WAITING = "WAITING"
}
declare enum ECrashAviatorMembersStatus {
    ACTIVE = "ACTIVE",
    WIN = "WIN",
    LOST = "LOST"
}
export interface ICrashAviatorData {
    t: number;
    st?: ECrashAviatorStatus;
    sc?: number;
    tm?: number;
    count?: number;
    bets?: number;
    win?: number;
    members?: ICrashAviatorMembers[];
}
export interface ICrashAviatorMembersData {
    count: number;
    bets: number;
    win: number;
}
export interface ICrashAviatorMembers {
    id: string;
    name: string;
    bet: number;
    score: number;
    status: ECrashAviatorMembersStatus;
}
export interface ICrashAviatorBet {
    type: 'start' | 'stop';
    sum?: number;
    hold?: number;
}
export interface IArgAndNumberMap {
    [name: string]: {
        [name: number]: number;
    };
}
export declare enum EAxis {
    X = "X",
    Y = "Y"
}
export {};
//# sourceMappingURL=interfaces.d.ts.map