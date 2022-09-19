const randomAmong = (num1, num2) => {

  return (Math.floor(Math.random() * (num2 - num1 + 1))) + num1

}

const chooseFrom = (arr) => {

  return arr[randomAmong(0, (arr.length - 1))]

}

const shuffle = (arr) => {

  let array = arr.slice()

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];

  }

  return array

}

const f = (a,b) => {

	const dat = new Date()

	dat.setDate(randomAmong(a,b))

	return dat

}

const s = ["AS", "RG", "DY", "KS", "YO", "VC"]


const a = () => {

  return {

    task: chooseFrom(["Quickly supply interoperable", "Proactively pontificate an", "Seamlessly deploy user-centric", "Collaboratively synergize customized", "Objectively facilitate highly."]),

    datetime: f(1,4).toISOString(),

    assigned_by: "Manohar Patnaik",

    assigned_to: "Arvind Karmarkar",

    others: shuffle(s).splice(0, randomAmong(0, 10)),

    deadline: f(6,11).toISOString(),

    status: chooseFrom(["delayed", "ongoing", "completed"]),

    priority: chooseFrom(["high", "low", "medium"])

  }

}

const final = [
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
	a(),
]


console.log(JSON.stringify(final));
