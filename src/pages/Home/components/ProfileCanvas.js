import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiEndpoints } from "../../../config/apiEndpoints";
import { fetchPost } from "../../../helpers/fetchPost";
import './ProfileCanvas.css';
import { ProfileItem } from "./ProfileItem";


export const ProfileCanvas = ({ loading, data, torreid, setPageState }) => {

    const [canvasState, setCanvasState] = useState({
        c1: null,
        c2: null,
        c3: null
    });

    const handleSubmit = () => {
        const { c1, c2, c3 } = canvasState;

        if (!!c1 && !!c2 && !!c3) {
            setPageState(pageState => {
                return {
                    ...pageState,
                    query: canvasState
                }
            });
        }
    }

    const getProfileData = async () => {
        try {
            if (torreid) {
                setPageState(pageState => {
                    return {
                        ...pageState,
                        profile: {
                            data: null,
                            loading: true
                        }
                    }
                });

                const profileData = await fetchPost(apiEndpoints.profile, { torreid });

                if (profileData.strengths) {
                    setPageState(pageState => {
                        return {
                            ...pageState,
                            profile: {
                                data: profileData,
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
            getProfileData();
        } catch (error) {
            toast.error('Error while loading data');
        }
    }, []);


    const strengthsItems = data?.strengths.map((item) => {
        return (
            <div className="fl w-100 w-third-ns pa2">
                <ProfileItem
                    className="pv4"
                    key={item?.id}
                    name={item?.name}
                    type='strengths'
                    setCanvasState={setCanvasState}
                />
            </div>
        );
    });

    const interestsItems = data?.interests.map((item) => {
        return (
            <div className="fl w-100 w-third-ns pa2">
                <ProfileItem
                    className="pv4"
                    key={item?.id}
                    name={item?.name}
                    type='interests'
                    setCanvasState={setCanvasState}
                />
            </div>
        );
    });

    const experiencesItems = data?.experiences.map((item) => {
        return (
            <div className="fl w-100 w-third-ns pa2">
                <ProfileItem
                    className="pv4"
                    key={item?.id}
                    name={item?.name}
                    type='experiences'
                    setCanvasState={setCanvasState}
                />
            </div>
        );
    });

    return (
        <div className='profile-canvas br2'>
            {
                loading
                    ?
                    (
                        <h1 className='pa4'>Loading...</h1>

                    )
                    :
                    (
                        <>
                            <div className="strengths mw9 center ph3-ns pa1"
                                style={{ padding: '1.1rem' }}
                            >
                                <b>Strengths</b>
                                <div className="cf ph2-ns radio-toolbar">
                                    {!!data && strengthsItems}
                                </div>
                            </div>

                            <div
                                className="interests mw9 center ph3-ns pa1"
                                style={{
                                    borderTop: '1px solid mediumpurple',
                                    borderBottom: '1px solid mediumpurple',
                                    padding: '1.1rem'
                                }}>
                                <b>Interests</b>
                                <div className="cf ph2-ns radio-toolbar">
                                    {!!data && interestsItems}
                                </div>
                            </div>

                            <div className="experiences mw9 center ph3-ns pa1"
                                style={{ padding: '1.1rem', borderBottom: '1px solid mediumpurple' }}>
                                <b>Experiences</b>
                                <div className="cf ph2-ns radio-toolbar">
                                    {!!data && experiencesItems}
                                </div>
                            </div>
                        </>
                    )
            }
            <button
                className='f6 dim ph3 pv2 mb2 dib white bg-dark-green mt4 mb4'
                onClick={handleSubmit}
            >
                Explore!
            </button>
            <Toaster position="bottom-right" />
        </div>
    )

}