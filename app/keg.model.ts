export class Keg {
  public pintsLeft: number = 124;
  constructor (
    public beerName: string,
    public brewery: string,
    public price: number,
    public pourSize: number,
    public alcoholContent: number,
    public numberOfKegs: number,
    public happyHour: boolean,
    public style: string){}
}
