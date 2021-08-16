/**
 * Mlo
 * @param ujao
 */
export default class mlo {
  saa: number;
  constructor() {
    this.saa = new Date().getHours();
  }
  ujao() {
    let mloDoc: any = [];
    const time = this.saa;
    switch (time) {
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        mloDoc = {
          mlo: "Staftahi",
          maelezo: "Chakula cha kwanza asubuhi baada ya kuamka.",
          mfano: ["chai", "kaimat"],
        };
        break;
      case 9:
      case 10:
      case 11:
      case 12:
        mloDoc = {
          mlo: "Chamcha",
          maelezo: "Chakula cha mchana.",
        };
        break;
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
        mloDoc = {
          mlo: "Chajio",
          maelezo: "Chakula cha jioni.",
        };
        break;
      default:
        mloDoc = {
          mlo: "Unachopenda",
          maelezo: "Chochote ambacho roho inatamani",
        };
        break;
    }
    return mloDoc;
  }
}
