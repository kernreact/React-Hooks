import React, { useContext, createContext } from 'react';

const styles = {
    light: {
        background: '#fff',
        color: '#333'
    },
    dark: {
        background: '#0d1117',
        color: '#c8cfd7'
    }
};
const layout = {
    left: 'row',
    right: 'row-reverse'
};

const ThemeContext = createContext({...styles.light, direction: layout.left});

const Layout = () => {
    const theme = useContext(ThemeContext);

    return (
        <section 
            className="layout-container"
            style={{            
                backgroundColor: theme.background,
                color: theme.color,
                flexDirection: theme.direction
            }}
        >
            <div className="sidebar">
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact us</a>
                    <a href="#">Blog posts</a>
                </nav>
            </div>
            <article>
                <h1>Welcome to my fantastic blog post</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam sed ex semper semper et accumsan erat. 
                    Fusce facilisis augue mauris, id pretium dui iaculis eu. Pellentesque varius a nisl nec accumsan. Integer ipsum est, 
                    lacinia vitae lorem at, blandit suscipit dui. Donec bibendum lorem mi, vel vehicula felis efficitur a.
                </p>
                <p>
                    Suspendisse et luctus massa. Ut tincidunt ex at tincidunt varius. Fusce sed ipsum lectus. Nulla varius erat sed dolor 
                    feugiat, et scelerisque nunc luctus. Nulla et nulla leo. In a arcu in leo mollis finibus in nec dui. 
                    Pellentesque lorem metus, pharetra quis mattis quis, fermentum id felis.
                </p>
                <p>
                    In blandit ligula at hendrerit maximus. Aliquam erat volutpat. Fusce malesuada elit sagittis, accumsan enim nec, ultrices 
                    risus. Aliquam eleifend scelerisque dolor ut blandit. Nullam posuere eros eu lectus molestie, ac posuere elit mattis. 
                    Fusce ligula tortor, sagittis vel sapien at, efficitur posuere leo. In hac habitasse platea dictumst.
                </p>
                <p>
                    Duis non ipsum lacinia, malesuada tortor nec, efficitur nisi. Ut molestie ut quam at pellentesque. Nam convallis sodales 
                    commodo. Suspendisse potenti. Donec in ipsum eros. Nunc venenatis lorem dolor, vitae tempor nulla mollis sit amet. Curabitur 
                    sed lacus commodo, viverra massa sit amet, luctus erat. In molestie tempus metus auctor suscipit.
                </p>
            </article>
        </section>
    )
};



export default () => (
    <ThemeContext.Provider value={{...styles.light, direction: layout.left}}>
        <Layout />
    </ThemeContext.Provider>
);