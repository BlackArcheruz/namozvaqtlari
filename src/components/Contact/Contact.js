import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <h1>Bog'lanish</h1>
            <input type="text" placeholder="Emailingizni kiriting" name="text"/>
            <input type="text" placeholder="Emailingizni kiriting" name="text"/>
            <textarea name="text" id="text" cols="30" rows="10" placeholder="Takliflaringizni yozib qoldiring"></textarea>
            <button>Yuborish</button>
        </div>
    )
}

export default Contact
