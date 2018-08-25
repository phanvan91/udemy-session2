import React from 'react'


class SearchBar extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            term : ''
        }
    }
    onInputChange = (e) => {
        this.setState({
            term : e.target.value
        },()=> this.props.onSearch(this.state.term))
    }
    render () {
        return (
            <div className={'search-bar'}>
                <input
                    type="text"
                    value={this.state.term}
                    onChange={e => this.onInputChange(e)}
                />
            </div>
        )
    }

}

export default SearchBar