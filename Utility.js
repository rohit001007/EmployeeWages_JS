class Utility {

    EMP_RATE_PER_HOUR = 20
    NUM_OF_WORKING_DAYS = 21
    IS_FULL_TIME = 1;
    IS_PART_TIME = 2;
    EMP_HR = 0;
    DAY = 0;
    
    empCheck
    empWage
    totalWage

    empAttendance() {

        this.empCheck = Math.floor(Math.random() * 10) % 3;
        return this.empCheck;
    }

    empDailyWage = () => {
        this.empWage = this.EMP_HR * this.EMP_RATE_PER_HOUR;
        return this.empWage;
    }

    mainEmployeeWage = () => {

        this.empAttendance();

        for (this.DAY = 0; this.DAY < this.NUM_OF_WORKING_DAYS; this.DAY++) {

            switch(this.empCheck) {
                
                case this.IS_PART_TIME:
                        this.EMP_HR = 8
                        break;
                
                case this.IS_FULL_TIME:
                        this.EMP_HR = 4    
                        break;
                    
                default: 
                    this.EMP_HR = 0
            }
            this.empDailyWage();
            this.totalWage = this.totalWage + this.empWage;
        }
        console.log(`\n * The Monthly Employee Wage Is : ${this.totalWage}`);
    }
}

module.exports = new Utility()