export const getUser = async () => {
    const res = await fetch("http://localhost:5000/user")
    return res.json()
}

export const getId = async (id) => {
    // const res = await fetch("http://localhost:5000/user")
    // const data = await res.json()
    // const f = data.find(v => v._id === id)
    // return f
}