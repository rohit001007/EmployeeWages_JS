class Utility {

    EMP_RATE_PER_HOUR = 20
    EMP_HR = 8
    
    empCheck
    empWage

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
        this.empDailyWage();

            if (this.empCheck == 1) {
                console.log("\n * Employee Is Present..! ");
                console.log("\n * The Daily Eamployee Wage Is : "+this.empWage);
            }
            else{
                console.log("\n * Employee Is Absent..! ");
            }
    }
}

module.exports = new Utility()