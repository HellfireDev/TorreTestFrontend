import toast, { Toaster } from 'react-hot-toast';
import { Scroll } from './Scroll';
import './OpportunitiesCanvas.css';
import { apiEndpoints } from '../../../config/apiEndpoints';
import { fetchPost } from '../../../helpers/fetchPost';
import { useEffect } from 'react';
import { JobItem } from './JobItem';
import { MentorItem } from './MentorItem';


export const OpportunitiesCanvas = ({ query: { c1, c2, c3 }, loading, data, setPageState }) => {

    const getOpportunitiesData = async () => {
        try {
            if (!!c1 && !!c2 && !!c3) {
                setPageState(pageState => {
                    return {
                        ...pageState,
                        opportunities: {
                            data: null,
                            loading: true
                        }
                    }
                });

                const opportunitiesData = await fetchPost(apiEndpoints.combo, { c1, c2, c3 });

                if (opportunitiesData.jobs) {
                    setPageState(pageState => {
                        return {
                            ...pageState,
                            opportunities: {
                                data: opportunitiesData,
                                loading: false
                            }
                        }
                    });
                } else {
                    throw new Error('Error while loading data');
                }
            }
        } catch (error) {
            toast.error('Error while loading data');
        }
    }

    useEffect(() => {
        try {
            getOpportunitiesData();
        } catch (error) {
            toast.error('Error while loading data');
        }
    }, [c1, c2, c3]);

    const jobItems = data?.jobs?.map((item) => {
        return (
            <div>
                <JobItem
                    key={item?.id}
                    id={item?.id}
                    description={item?.objective}
                    organization={item?.organizations[0]}
                    location={item?.locations[0]}
                    remote={item?.remote}
                    status={item?.status}
                />
            </div>
        );
    });

    const mentorItems = data?.mentors?.map((item) => {
        return (
            <div>
                <MentorItem
                    key={item?.subjectId}
                    name={item?.name}
                    picture={item?.picture}
                    title={item?.professionalHeadline}
                    location={item?.locationName}
                    username={item?.username}
                />
            </div>
        );
    });


    return (
        <div className='opportunities-canvas br2 pa3'>
            {
                loading
                    ?
                    (
                        <h1 className='pa4'>Loading...</h1>
                    )
                    :
                    (
                        <>
                            <div>
                                <b>Potential Jobs</b>
                                <Scroll>
                                    {c1 ? jobItems : <p>No search yet</p>}
                                </Scroll>
                            </div>

                            <div className='pt4 pb2'>
                                <b>Potential Mentors</b>
                                <Scroll>
                                    {c1 ? mentorItems : <p>Waiting for your selection</p>}
                                </Scroll>
                            </div>
                        </>
                    )
            }
            <Toaster position="bottom-right" />
        </div>
    );

}