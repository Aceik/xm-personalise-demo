import { ComponentWithContextProps } from 'lib/component-props';
import React, { useEffect } from 'react';
import { resetEditorChromes, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';

type NavigationProps = ComponentWithContextProps & {
    fields: {
        navs: Array<NavigationItem>;
    };    
};

interface NavigationItem {
    id: string;
    url: string;
    navigationTitle: string;
    children?: Array<NavigationItem>;
}

const Navigation = ({ fields }: NavigationProps): JSX.Element => {
    // const { sitecoreContext } = useSitecoreContext<SitecoreContext>();

    const NavigationItems = fields?.navs;

    useEffect(() => {
        resetEditorChromes();
    }, []);

    return (
        <>                    
        <div className="container">
            <nav id="hmenu">
                <div id="head-mobile"></div>
                <div className="button"></div>
                <ul>
                    {NavigationItems &&
                            NavigationItems?.length > 0 &&
                        NavigationItems.map((navItem: NavigationItem, index: number) => {
                            const navKey = navItem.id || index;
                            // const isDropdown = navItem?.children && navItem?.children?.length > 0;                
                            return (                               
                                <li key={navKey} className=''><a href={navItem?.url}>{navItem?.navigationTitle}</a></li>                                                                               
                            );
                        }
                    )}
                </ul>
            </nav>
        </div>                                               
    </>
    );
};

export default Navigation;
