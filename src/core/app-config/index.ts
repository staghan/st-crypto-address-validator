import { AppStatus } from '../../config/constants/core/app-config';

export class AppConfig {
  private static _name: string;
  private static _version: string;
  private static _status: AppStatus;
  private static _stopRequest: boolean;

  public static get Name(): string {
    return this._name;
  }

  public static get Version(): string {
    return this._version;
  }

  public static get Status(): AppStatus {
    return this._status;
  }

  public static set Status(value: AppStatus) {
    this._status = value;
  }

  public static get StopRequest(): boolean {
    return this._stopRequest;
  }

  public static set StopRequest(value: boolean) {
    this._stopRequest = value;
  }

  public static init(name: string, version: string) {
    this._name = name;
    this._version = version;
    this._status = AppStatus.INITIAL;
    this._stopRequest = false;
  }
}
