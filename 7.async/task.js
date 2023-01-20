class AlarmClock{
    constructor(){
        this.alarmCollection = []
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не передан id будильника');
        }
        if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            console.error('Будильник с таким id уже существует');
            return;
        }
        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        let arrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(elem => elem.id !== id);
        if (arrLength == this.alarmCollection.length) {
            return false;
        }
        return true;
    }

    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
        return date;
    }

    start() {
        console.log ('Будильник запущен')
        let checkClocks = () => {
          console.log('тик-так')
          this.alarmCollection.forEach((clock) => {
            if(clock.time == this.getCurrentFormattedTime()){
              clock.callback()
            }
          })
        }
        if (this.timerId == null){
          this.timerId = setInterval(checkClocks, 1000);
         }
      }

    stop() {
        if (this.timerId !== null) {
          clearInterval(this.timerId);
          this.timerId = null;
          console.log('Будильник остановлен');
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(elem => console.log(elem.id + ':' + elem.time));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}
