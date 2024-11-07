import styles from "@/styles/Reservations.module.css";
import { gql, useQuery } from '@apollo/client';

const GET_CALENDERS = gql`
    query GetCalendars {
        calendars(where: {state_in: Open, customers_some: { id: "cm0b8kilabkyu0783rc2uuzax"} }, orderBy: from_DESC) {
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
        }
    }
`;


export default function MyReservations() {
  const { data, loading, error } = useQuery(GET_CALENDERS);
  console.log('data', data)
  console.log('loading', loading)
  console.log('error', error)
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

          <div className={styles.reservation}>
            <img className={styles.logo} src="/item-logo.png" alt="MyFox"/>
            <div className={styles.content}>
              <div className={styles.subject}>
                <h2>Salon Kristýna</h2>
                <div>Solní 4, Plzeň</div>
                <div>tel 603 252 519</div>
              </div>
              <div className={styles.detail}>
                <h3>Aromaterapeutická masáž</h3>
                <div className={styles.when}>29.1.2024 8:00</div>
                <div>60 minut, 1690 Kč</div>
              </div>
              <div className={styles.buttons}>
                <button>Trasa</button>
                <button>Zavolat</button>
                <button>...</button>
              </div>
            </div>
          </div>

          <div className={styles.reservation}>
            <img className={styles.logo} src="/item-logo.png" alt="MyFox"/>
            <div className={styles.content}>
              <div className={styles.subject}>
                <h2>Salon Kristýna</h2>
                <div>Solní 4, Plzeň</div>
                <div>tel 603 252 519</div>
              </div>
              <div className={styles.detail}>
                <h3>Aromaterapeutická masáž</h3>
                <div className={styles.when}>29.1.2024 8:00</div>
                <div>60 minut, 1690 Kč</div>
              </div>
              <div className={styles.buttons}>
                <button>Trasa</button>
                <button>Zavolat</button>
                <button>...</button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
