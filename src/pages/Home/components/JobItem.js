

export const JobItem = ({ id, description, organization, location, remote, status }) => {

    return (
        id
            ?
            (
                <div className='bg-black-10 br2 pb1 mb3'>
                    <div className='flex'>
                        <img src={`${organization.picture}`} alt='logo' className='w3 pa2 ml3 mt2' />
                        <h3 className='center pt2 white'>{description}</h3>
                    </div>
                    <hr className='white-20' />
                    {location ? <p>{organization.name} | {location}</p> : <p>{organization.name} | Location not specified</p>}
                    {remote ? <p>Remote Available</p> : <p>Remote availability not specified</p>}
                    <p>{status.toUpperCase()}</p>
                </div>
            )
            :
            (
                <></>
            )

    );
}