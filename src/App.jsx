import React from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";
import { getLoginQrCKey } from "./api";

function App() {
    const [theme, settheme] = React.useState({
        token: { colorPrimary: "pink" }
    });
    const fn = () => {
        getLoginQrCKey()
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <ConfigProvider theme={theme} className="App">
            <header className="App-header text-[red]">
                下午好，小余同学
                <Button onClick={() => fn()}>按钮</Button>
                <Button
                    onClick={() =>
                        settheme({
                            token: { colorPrimary: "red" }
                        })
                    }
                >
                    修改颜色
                </Button>
            </header>
        </ConfigProvider>
    );
}

export default App;
