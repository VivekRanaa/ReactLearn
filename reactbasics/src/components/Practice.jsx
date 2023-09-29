import React,{Component} from "react";
const Countries=[
{
    name:"India",
        code
:
    "IN",
        cities
:
    ["Delhi", "Mumbai", "Bangalore"]
},{
        name:"USA",
        code
            :
            "USA",
        cities
            :
            ["Texas", "Illinois", "Flroida"]
    },
    {
        name:"Australia",
        code
            :
            "AUS",
        cities
            :
            ["Sydney", "Melbourne", "Canberra"]
    }

]


class Practice extends Component {

    constructor(props) {
        super(props);
        this.state={
            country: "India",
            cities:   ["Delhi", "Mumbai", "Bangalore"]
        }
    }
    changed = (e) => {
        const selectedCountry = e.target.value;
        const selectedCities = Countries.find((item) => item.name === selectedCountry)?.cities || [];

        this.setState({
            country: selectedCountry,
            cities: selectedCities
        });
    };

    render() {
        return (
            <>
                <select value={this.state.country} onChange={this.changed}>

                    {Countries.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <select value={this.state.cities}>

                    {this.state.cities.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </>
        );
    }
}
export default Practice
