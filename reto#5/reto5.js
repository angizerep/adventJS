// export default function daysToXmas(date) {
function daysToXmas(date) {
    let christmas = new Date('Dec 25, 2021')
    let datesubmit = new Date(date);

    console.log('christmas ', christmas)
    console.log('datesubmit ', datesubmit)

    return Math.ceil((christmas-datesubmit)/(1000*60*60*24));

}

const date = new Date('Dec 24, 2021') // 1
// const date = new Date('Dec 25, 2021') // 0
// const date = new Date('Dec 26, 2021') // -1
// const date = new Date('Dec 31, 2021') // -6
// const date = new Date('Jan 1, 2022 00:00:01') // -7
// const date = new Date('Jan 1, 2022 23:59:59') // -7

const dias = daysToXmas(date) // 0
console.log (' date ', dias)
