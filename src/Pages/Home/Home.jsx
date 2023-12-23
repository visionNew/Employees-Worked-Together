import DecoratedText from "./../../components/DecoratedText/DecoratedText";
import "./Home.css";

function Home() {
    return (
        <section className="home">
        <div className="container">
            <div className="content">
            <h1>
                <DecoratedText />
            </h1>
            <p>
                Statistic App is an intuitive and user-friendly application designed
                to provide a quick and reliable solution for processing and
                analyzing employee statistical data. With features such as file
                uploads, data validation, and filtering capabilities, users can
                efficiently process and visualize their information. Whether you are
                an HR professional, manager, or analyst, Statistic App helps you
                make swift and informed decisions based on up-to-date and accurate
                data.
            </p>
            </div>
        </div>
        </section>
    );
}

export default Home;
