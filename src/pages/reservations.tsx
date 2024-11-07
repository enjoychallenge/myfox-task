import styles from "@/styles/Reservations.module.css";
import { gql, useQuery } from '@apollo/client';

type ReservationModel = {
    id: string
    shopName: string;
    address: string,
    phone: string;
    cartName: string;
    from: Date;
    length: number;
    price: number;
}

const GET_CALENDERS = gql`
    query GetCalendars {
        calendars(where: {state_in: Open, customers_some: { id: "cm0b8kilabkyu0783rc2uuzax"} }, orderBy: from_ASC) {
            id
            shop {
                name
                address {
                    street
                    city
                }
                phone
            }
            subject {
                alias
            }
            from
            to
            carts {
                name
                price
            }
        }
    }
`;

function Reservation(reservation: ReservationModel) {
    return (
        <div className={styles.reservation} key={reservation.id}>
            <img className={styles.logo} src="/item-logo.png" alt="MyFox"/>
            <div className={styles.content}>
                <div className={styles.subject}>
                    <h2>{reservation.shopName}</h2>
                    <div>{reservation.address}</div>
                    <div>tel {reservation.phone}</div>
                </div>
                <div className={styles.detail}>
                    <h3>{reservation.cartName}</h3>
                    <div className={styles.when}>{reservation.from.toLocaleString('cs-CZ', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    })}</div>
                    <div>{reservation.length} minut, {reservation.price} Kč</div>
                </div>
                <div className={styles.buttons}>
                    <button>Trasa</button>
                    <button>Zavolat</button>
                    <button>...</button>
                </div>
            </div>
        </div>
    )
}

function transformReservationData(rawData: any): ReservationModel {
    return {
        id: rawData.id,
        shopName: rawData.shop.name,
        address: rawData.shop.address.street + ", " + rawData.shop.address.city,
        phone: rawData.shop.phone,
        cartName: rawData.carts[0].name,
        from: new Date(rawData.from),
        length: Math.floor((new Date(rawData.to).getTime() - new Date(rawData.from).getTime()) / 1000 / 60),
        price: rawData.carts.reduce((partialSum: number, cart: { name: string, price: number }) => partialSum + cart.price, 0)
    }
}


export default function MyReservations() {
    const {data, loading, error} = useQuery(GET_CALENDERS);
    return (
        <div className={styles.page}>
            <header>
                <img className={styles.logo} src="/myfox.png" alt="MyFox"/>
        <h2>Rezervační systém</h2>
        <img className={styles.icon} src="/menu-icon.svg" alt="Menu"/>
      </header>
      <main>
        <h1>Moje rezervace</h1>
        <div className={styles.reservations}>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && data.calendars.map((calendar: any) => (
                Reservation(transformReservationData(calendar))
            ))}
        </div>
      </main>
    </div>
  );
}
