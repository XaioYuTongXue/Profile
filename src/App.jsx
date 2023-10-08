import React from "react";
import "./App.css";
import { Button, ConfigProvider } from "antd";

function App() {
    const [theme, settheme] = React.useState({
        token: { colorPrimary: "pink" }
    });
    const fn = () => {};

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
