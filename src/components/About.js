import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class About extends React.Component {

  handleClick(e) {
    e.preventDefault()
    this.props.router.push('/')
  }

  render() {

    return (
      <div className='about'>
          <h2 className='about-heading'>About Us</h2>
          <h3>Kia Ora! Kōrero Mai was made with aroha by the team at Manu, and with the assistance of the talented UX designer, Katie Deller.</h3>
        <div className='profile'>
          <img src='images/janie.png' alt='Janie Tito' />
          <p><b>Janie Tito</b></p>
          <p>Ngā Puhi me Ngāti Whātua</p>
        </div>
        <div className='profile'>
          <img src='images/anna.png' alt='Anna-Marie Vos' />
          <p><b>Anna-Marie Vos</b></p> <p>Āwherika ki te Tonga</p>
        </div>
        <div className='profile'>
          <img src='images/meghan.png' alt='Meghan Hughes' />
          <p><b>Meghan Hughes</b></p>
          <p>Ngāti Pākehā</p>
        </div>
        <div className='profile'>
          <img src='images/katie.png' alt='Katie Deller' />
          <p><b>Katie Deller</b></p>
          <p>Ngāti</p>
        </div>
        <div className='purpose'>
          <h3>How this came about</h3>
          <p>Janie has two tamariki who
          attend bilingual classes at Koraunui
          Primary School in Lower Hutt. One day
          their teacher shared her wish for an
          app to help her students learn te reo
          Māori phonics - and this sparked the
          idea for Kōrero Mai.</p>
          <p>Koraunui Primary School has been a
          huge help in the development of this
          app, as well as providing voices and
          video footage. Ngā mihi nui ki a
          koutou!</p>
        </div>
        <div className='contact'>
          <h4>Please get in touch,
          Email: hello@manu.net.nz</h4>
          <h4>To find out more about
          Manu: <a href='https://www.manu.net.nz'>www.manu.net.nz</a></h4>
          <h4>To contact Katie, Email: dellerka@gmail.com</h4>
          <Link to='/contents'>
            <p>Back to Contents</p>
          </Link>
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(About)
