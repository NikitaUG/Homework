// 'https://pixabay.com/api/?key=25104933-73fa603ef3cc48880c48651c7&q=yellow+flowers&image_type=photo'

let input = document.querySelector('input');
let perPage = 10;
let page = 1;
let button = document.querySelector('button');
let divs = document.querySelector('.images');
let request = `yellow+flowers`;
let query = `key=25104933-73fa603ef3cc48880c48651c7&q=${request}&image_type=photo&per_page=${perPage}&page=${page}`;
newSearch();
button.disabled = true;

input.addEventListener('input', (e) => {
    button.disabled = !input.value;
    // if (input.value !== ''){
    //     button.disabled = false;
    // } else {button.disabled = true;}
})
button.addEventListener('click', (event) => {
    event.preventDefault();

    request = input.value.replace(' ', '+');



    query = `key=25104933-73fa603ef3cc48880c48651c7&q=${request}&image_type=photo`;
    newSearch();
    console.log(query);

});


function newSearch() {

    fetch(`https://pixabay.com/api/?${query}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            let html = '';
            let tagsArray = [];
            let tagsArrayCount = {};



            for (let i = 1; i < data.hits.length; i++) {
                const tags = data.hits[i].tags.replace(/\,/g, '').split(' ')
                // console.log(tags)

                tagsArray.push(...tags);



                html += `<div>
            <a href="https://pixabay.com/ru/users/${data.hits[i].user_id}"><img src="${data.hits[i].webformatURL}" alt="${data.hits[i].tags}" class="get-images"></a>
            <br>

            <a href="https://pixabay.com/ru/users/${data.hits[i].user_id}">${data.hits[i].tags}</a></div>`;
            }
            // console.log(tagsArray);


            tagsArray.forEach(i => { tagsArrayCount[i] = 0 })
            // for (let i = 0; i < tagsArray.length; i++) {
            //     tagsArrayCount[`${tagsArray[i]}`] = 0;
            // }
            // console.log('forEach: ', tagsArrayCount);
            let tempCountTags = Object.getOwnPropertyNames(tagsArrayCount);
            tagsArray.forEach(i => {
                tempCountTags.forEach(j =>{
                    if (i === j) {
                        tagsArrayCount[i]++;
                    }
                })
            })

            // tagsArray.forEach(i => {
                
            //     for (let j = 0; j < tempCountTags.length; j++) {
            //         if (i === tempCountTags[j]) {
            //             tagsArrayCount[i]++;
            //         }
            //     }
            // })

            // for (let i = 0; i < tagsArray.length; i++) {
            //     for (let j = 0; j < tempCountTags.length; j++) {
            //         if (tagsArray[i] === tempCountTags[j]) {
            //             tagsArrayCount[`${tagsArray[i]}`]++;
            //         }
            //     }
            // }
            console.log(tagsArrayCount);
            document.title = `Best tags: ${MaxTagsValue(tagsArrayCount)}`;



            divs.innerHTML = html;


            let p = document.querySelector('.pagination');
            p.innerHTML = '';


            const lastPage = data.totalHits / perPage;
            generatorPageHref(1, p);
            if (page < 4) {
                for (let i = 2; i < 5; i++) {
                    generatorPageHref(i, p);
                }
                generatorPageHref('...', p);
            }
            if (page >= 4 && page <= lastPage - 3) {
                generatorPageHref('...', p);
                for (let i = page - 2; i < page + 2; i++) {
                    generatorPageHref(i, p);
                }
                generatorPageHref('...', p);
            }
            if (page > lastPage - 3) {
                generatorPageHref('...', p);
                for (let i = page - 2; i < lastPage + 1; i++) {
                    generatorPageHref(i, p);
                }

            }
            generatorPageHref(lastPage + 1, p);


        });
}

function generatorPageHref(index, p) {
    const a = document.createElement('a');
    a.innerHTML = index;
    p.appendChild(a);
    a.onclick = e => {
        e.preventDefault();
        query = `key=25104933-73fa603ef3cc48880c48651c7&q=${request}&image_type=photo&per_page=${perPage}&page=${index}`;
        page = index;
        newSearch();
    }
}


function MaxTagsValue(obj) {
    const maxValue = Math.max.apply(null, Object.values(obj));
    return Object.keys(obj).filter(value => obj[value] === maxValue)
}

