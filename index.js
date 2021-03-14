var jobs = [
    {
        id:1,
        desc: "Primeiro teste",
        data_max:'2021-02-04 12:00:00',
        temp_est: '5 horas'
    },
    {
        id:2,
        desc: "Segundo teste",
        data_max:'2021-02-04 21:00:00',
        temp_est: '9 horas'
    },
    {
        id:3,
        desc: "Terceiro teste",
        data_max:'2021-02-04 07:00:00',
        temp_est: '3 horas'
    },
    {
        id:4,
        desc: "Quarto teste",
        data_max:'2021-02-04 08:00:00',
        temp_est: '8 horas'
    },
    {
        id:5,
        desc: "Quinto teste",
        data_max:'2021-02-04 21:00:00',
        temp_est: '10 horas'
    },
    {
        id:6,
        desc: "Sexto teste",
        data_max:'2021-02-04 09:00:00',
        temp_est: '9 horas'
    },
    {
        id:7,
        desc: "Sétimo teste",
        data_max:'2021-02-04 16:00:00',
        temp_est: '2 horas'
    },
    {
        id:8,
        desc: "Oitavo teste",
        data_max:'2021-02-04 00:00:00',
        temp_est: '7 horas'
    },

]

function checkHoras (job){
    return job.temp_est.split(' ')[0] <= 8
}

var jobsFilter = jobs.filter(checkHoras)