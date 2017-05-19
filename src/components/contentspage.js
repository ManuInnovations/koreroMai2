const debug = require("debug")("components:contentspage")
const React = require("react")
const { connect } = require("react-redux")
const request = require("superagent")
const { Link } = require("react-router")

class contentspage extends React.Component {

  handleClick(e) {
    e.preventDefault()
  }

  render() {
    debug(this.props)
    const { dispatch, letters } = this.props

    return (
      <div className="row">
        <div className="col-sm-12">
            {
            letters.map((letter) => {
              return (

                <Link key={letter.id} to={`/letterIndex/${letter.capital}`}>
                  <div
                    className="btn-group btn-group-lg btn-group-center wiggle-me"
                    role="group"
                    aria-label="...">

                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                          dispatch({
                            type: "RENDER_LETTER",
                            payload: { letter },
                          })
                      }>
                      {letter.capital}
                    </button>

                  </div>
                </Link>
              )
            })
          }
        </div>
        <div className="col-sm-12">
          Button linking to multimedia library
        </div>
      </div>
    )
  }
}

module.exports = connect(state => state)(contentspage)