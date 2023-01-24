const postData = async (url, data) => {//Lec_90 4:05. //Lec_104 20:25 Переносим postData из forms в servises.js
    const res = await fetch(url, {//Lec_90 5:05
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json(); 
};    

// const getResource = async (url) => { // Установлена библиотека Axios мз 91 урока
//     const res = await fetch(url);
//     if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, status ${res.status}`);
//     } 
//     return await res.json(); 
// };   



export { postData };
// export { getResource };