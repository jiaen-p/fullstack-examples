function ascii_cipher (text) {
    let ascii_text = ""
    for (i = 0; i < text.length; i++){
        ascii_text += text.charCodeAt(i) + " "
    }
    console.log( ascii_text )
}

ascii_cipher("asdlfkjhalksdjhjd")

// --------------------------------------------------

asci = (text) => {
    let ascii_text = ""
    for (i = 0; i < text.length; i++){
        ascii_text += text.charCodeAt(i) + " "
    }
    console.log( ascii_text )
}

asci("qweroiasdfoknads-.cvzpg41'2394890'ad")