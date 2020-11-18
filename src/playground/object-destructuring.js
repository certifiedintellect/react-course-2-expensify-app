const book = {
    title: 'Ego is my enemy',
    author: 'Ryan Holland',
    publisher: {
        name: 'Penguin'
    }
}


const {name: publisherName = 'Self Published'} = book.publisher

console.log(publisherName)


const item = ['Coffee (hot)', '2$', '2.50$', '3$']

const [coffee, ,mediumPrice] = item

console.log(`${coffee} charges ${mediumPrice}`)