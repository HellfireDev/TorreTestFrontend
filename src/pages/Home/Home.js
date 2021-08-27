import { useContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../auth/AuthContext";
import { OpportunitiesCanvas } from "./components/OpportunitiesCanvas";
import { ProfileCanvas } from "./components/ProfileCanvas";
import { TopBar } from "./components/TopBar";

export const Home = () => {

    const { user: { name, torreid } } = useContext(AuthContext);

    const [pageState, setPageState] = useState({
        profile: { data: null, loading: false }, //user strengths, interests and experiences
        opportunities: { data: null, loading: false }, //jobs and mentors
        query: { c1: null, c2: null, c3: null } //criterion 1, 2, 3 and begin search
    });

    const { profile, opportunities, query } = pageState;

    return (
        <>
            <TopBar />
            <p className='f5 white-80 mr-auto mt4 mb1'>Hello {name}! Pick one item per category and explore new challenges.</p>
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 w-50-ns pa2">
                        <ProfileCanvas
                            loading={profile.loading}
                            data={profile.data}
                            torreid={torreid}
                            setPageState={setPageState}
                        />
                    </div>
                    <div className="fl w-100 w-50-ns pa2">
                        <OpportunitiesCanvas
                            query={query}
                            loading={opportunities.loading}
                            data={opportunities.data}
                            setPageState={setPageState}
                        />
                    </div>
                </div>
            </div>

            <Toaster position="bottom-right" />
        </>
    );

}