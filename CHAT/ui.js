export class ChatUI {
  constructor(l) {
    this.list = l;
  }
  set list(l) {
    this._list = l;
  }
  get list() {
    return this._list;
  }
  templateLI(data) {
    // let date = data.created_at.toDate().toDateString();
    let htmlLI = `<li>
            <span class="username" >${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date" style="color:grey">${this.format(data)}</div>
        </li>`;
    this.list.innerHTML += htmlLI;
  }

  format(data) {
    let date = data.created_at.toDate();
    let today = new Date();
    if (date.toDateString() === today.toDateString()) {
      let h = date.getHours();
      let min = date.getMinutes();
      h = String(h).padStart(2, "0");
      min = String(min).padStart(2, "0");

      return h + ":" + min;
    } else {
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
      let h = date.getHours();
      let min = date.getMinutes();

      d = String(d).padStart(2, "0");
      m = String(m).padStart(2, "0");
      h = String(h).padStart(2, "0");
      min = String(min).padStart(2, "0");

      let formDate = d + "." + m + "." + y + "." + "-" + h + ":" + min;
      return formDate;
    }
  }
}
