const Contact = () => {
    return (

        <div className="forms">
            <form action="">
                <label htmlFor="fname">First Name:
                <input className="contact_text"  type="text" id="fname" name="firstname" placeholder="Your name.."/></label>

                <label htmlFor="lname">Last Name:
                <input className="contact_text" type="text" id="lname" name="lastname" placeholder="Your last name.."/></label>

                <label htmlFor="country">Country:
                <select className="contact_text" id="country" name="country">
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select></label>

                <input className="sub" type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Contact