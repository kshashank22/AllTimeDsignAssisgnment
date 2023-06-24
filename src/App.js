import {Component} from 'react'
import {FaCheck} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import './App.css'

class App extends Component {
  state = {taskValue: '', dateValue: '', timeValue: '', condition: false}

  saveData = () => {
    this.setState({condition: true})
  }

  plusData = () => {
    this.setState({
      taskValue: '',
      dateValue: '',
      timeValue: '',
      condition: false,
    })
  }

  tasker = event => {
    this.setState({taskValue: event.target.value})
  }

  dater = event => {
    this.setState({dateValue: event.target.value})
  }

  timer = event => {
    this.setState({timeValue: event.target.value})
  }

  render() {
    const {taskValue, dateValue, timeValue, condition} = this.state
    return (
      <div className="bg-container">
        <div className="task-container">
          <h1 className="task">TASK 1</h1>
          <p className="plus" onClick={this.plusData}>
            +
          </p>
        </div>
        {condition ? (
          <div className="check-task">
            <div className="line">
              <CgProfile className="profile" size={30} />
              <div>
                <h1 className="heading">{taskValue}</h1>
                <p className="para">
                  {dateValue} at {timeValue}
                </p>
              </div>
            </div>
            <div>
              <FaCheck className="tick" size={30} />
            </div>
          </div>
        ) : (
          <form className="schedule-container">
            <div className="task-description">
              <label className="label-text" htmlFor="task">
                Task Description
              </label>
              <input
                onChange={this.tasker}
                className="input-class"
                type="text"
                value={taskValue}
                placeholder="Followup"
                id="task"
              />
            </div>
            <div className="date-time-container">
              <div className="date-container">
                <label className="label-text" htmlFor="data">
                  Date
                </label>
                <input
                  onChange={this.dater}
                  className="date-time-class"
                  type="date"
                  placeholder="Followup"
                  id="date"
                  value={dateValue}
                />
              </div>
              <div className="time-container">
                <label className="label-text" htmlFor="time">
                  Time
                </label>
                <input
                  onChange={this.timer}
                  className="date-time-class"
                  type="time"
                  placeholder="Followup"
                  id="time"
                  value={timeValue}
                />
              </div>
            </div>
            <div className="assign-container">
              <p className="label-text" htmlFor="task">
                Assign User
              </p>
              <select className="label-text input-class">
                <option>Plan User</option>
              </select>
            </div>
            <div className="button-container">
              <button type="button" className="cancel">
                Cancel
              </button>
              <button type="button" className="save" onClick={this.saveData}>
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}
export default App
