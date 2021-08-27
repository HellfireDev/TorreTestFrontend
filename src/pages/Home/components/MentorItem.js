

export const MentorItem = ({ name, picture, title, location, username }) => {

    return (
        username
            ?
            (
                <div className='bg-black-10 br2 pb1 mb3' >
                    <div className='flex'>
                        <img src={`${picture}`} alt='picture' className='w3 pa2 ml3 mt2' />
                        <div>
                            <h3 className='center pt1 white'>{name}</h3>
                            <h4 className='center green'>{title}</h4>
                        </div>
                    </div>
                    <hr className='white-20' />
                    {location ? <p>{location}</p> : <p>Location not specified</p>}
                    {<p>Username: {username}</p>}
                </div >
            )
            :
            (
                <> </>
            )

    );
}