class Utility {

    EMP_RATE_PER_HOUR = 20
    NUM_OF_WORKING_DAYS = 21
    MAX_HRS_IN_MONTH = 100;
    IS_FULL_TIME = 1;
    IS_PART_TIME = 2;
    EMP_HR = 0;
    DAY = 0;
    
    empCheck = 0
    empWage = 0
    totalWage = 0
    totalEmpHrs = 0 
    totalWorkingDays = 0

    empAttendance() {

        this.empCheck = Math.floor(Math.random() * 10) % 3;
        return this.empCheck;
    }

    empDailyWage = () => {
        this.empWage = this.EMP_HR * this.EMP_RATE_PER_HOUR;
        return this.empWage;
    }

    getWorkingHrs = () =>{

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
        return this.EMP_HR
    }

    mainEmployeeWage = () => {

        let empDailyWage = new Map();

        while (this.totalEmpHrs <= this.MAX_HRS_IN_MONTH && this.totalWorkingDays < this.NUM_OF_WORKING_DAYS) {
            this.totalWorkingDays++;

            this.empAttendance();
            this.EMP_HR = this.getWorkingHrs(this.empCheck);
            this.totalEmpHrs += this.EMP_HR;
            empDailyWage.set("Day"+this.totalWorkingDays, this.empDailyWage(this.EMP_HR))
        }
        this.totalEmpWage = this.totalEmpHrs * this.EMP_RATE_PER_HOUR;
        console.log(`\n * The Monthly Wage Of Employee Is : ${this.totalEmpWage} \n`);
        console.log(empDailyWage);
    }
}

module.exports = new Utility()