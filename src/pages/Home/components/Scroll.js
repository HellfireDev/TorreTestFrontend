export const Scroll = props => {
    return (
        <div
            style={{
                overflowY: 'scroll',
                overflowX: 'hidden',
                border: '1px solid mediumpurple',
                height: '25vh',
                scrollbarWidth: 'thin',
                padding: '1rem'
            }}>
            {props.children}
        </div>
    );
}