import logo from './logo.svg';
import './App.css';

function App() {

    let strings = []
    let results = []

    function Compute1() {
        const s = document.getElementById("strings").value
        let a = s.split("\n")
        console.log(s)
        console.log(a[2])
        console.log(a.length)

        const rand = Math.floor((Math.random() * a.length) );
        console.log(rand)
        results.push(a[rand])
        console.log(results)
        console.log(a)


        document.getElementById("results").value = results.join("\n");

    }
    function Compute2() {
        const s = document.getElementById("strings").value
        let a = s.split("\n")
        console.log(s)
        console.log(a)
        console.log(a.length)
        const rand = Math.floor((Math.random() * a.length) );
        console.log(rand)
        results.push(a[rand])
        console.log(results)
        a.splice(rand, 1)

        strings = a
        console.log(a)

        document.getElementById("strings").value = a.join("\n");
        document.getElementById("results").value = results.join("\n");

    }

    function Clear(){
        strings = []
        results = []
        document.getElementById("strings").value = "";
        document.getElementById("results").value = "";
    }

    return (
        <div className="App">
            <div>
                <header className="App-header">
                    Assignment 9 <br/>
                    String Randomization
                </header>
            </div>
            <div>

                <p>
                    Enter Strings to be chosen <br/>
                    (Separate multiple strings by new lines) <br/>
                </p>

                <textarea id="strings" name="strings" rows="15" cols="20" /> <br />
                <input onClick={Compute1} type="submit" value="With Replacement" />
                <input onClick={Compute2} type="submit" value="Without Replacement" />
                <br />
                <textarea  name = "results" id = "results" rows="15" cols="20" /> <br />
                <br />
                <input onClick={Clear} type = "submit" value="Clear" />

            </div>
        </div>

    );
}

export default App;
