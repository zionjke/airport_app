import * as React from 'react';

type Props = {
    switchLang:boolean
};

export const TableHead: React.FC<Props> = ({switchLang}) => {
    return (
        <tr>
            <th>{switchLang ? 'Flight' : 'Рейс'}</th>
            <th>{switchLang ? 'Time' : 'Час'}</th>
            <th>{switchLang ? 'Destination' : 'Призначення'}</th>
            <th>{switchLang ? 'Carrier' : 'Перевізник'}</th>
            <th>{switchLang ? 'Terminal' : 'Термінал'}</th>
            <th>{switchLang ? 'Status' : 'Статус'}</th>
        </tr>
    );
};
