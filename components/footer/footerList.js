export const FooterList = ({data}) => {
    return (
        <div>
            {data.map(i => (
                <div key={i.id}>
                    <h3>{i.title}</h3>
                    <p>{i.text1}</p>
                    <p>{i.text2}</p>
                    {i.text3 && <p>{i.text3}</p>}
                    {i.text4 && <p>{i.text4}</p>}
                </div>
            ))}
        </div>
    )
}