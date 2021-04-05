import * as React from 'react';

type Props = {
    switchLang:boolean
    departure?: boolean
};

export const TableHead: React.FC<Props> = ({switchLang,departure}) => {
    return (
        <tr>
            <th>{switchLang ? 'Flight' : 'Рейс'}</th>
            <th>{switchLang ? 'Time' : 'Час'}</th>
            <th>{switchLang ? 'Destination' : 'Призначення'}</th>
            <th>{switchLang ? 'Carrier' : 'Перевізник'}</th>
            <th>{switchLang ? 'Terminal' : 'Термінал'}</th>
            {
                departure && <th>{switchLang ? 'Gate' : 'Гейт'}</th>
            }
            <th>{switchLang ? 'Status' : 'Статус'}</th>
        </tr>
    );
};
