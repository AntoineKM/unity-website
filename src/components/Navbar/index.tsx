import { fetcher } from "@services/swr";
import Link from "next/link";
import { styled } from "styled-components";
import useSWR from "swr";

const Navbar: React.FC = () => {
  const { data, error, isLoading } = useSWR<{
    Data: {
      clients: number;
    };
  }>("https://servers-frontend.fivem.net/api/servers/single/q8538p", fetcher, {
    refreshInterval: 5000,
  });

  return (
    <Container>
      <Link href={"/"}>
        <Featured>
          <Brand>{"Unity RP 🐬"}</Brand>
          <OnlinePlayers>
            <Dot>{"•"}</Dot>
            {`${
              data && !error && !isLoading ? data.Data.clients : "-"
            } online player${data?.Data.clients !== 1 ? "s" : ""}`}
          </OnlinePlayers>
        </Featured>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 0 15px;
  height: 30px;
`;

const Dot = styled.span`
  margin: 0 8px;
`;

const Featured = styled.div`
  display: flex;
  align-items: center;
`;

const Brand = styled.h1`
  font-weight: 700;
`;

const OnlinePlayers = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);

  span {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export default Navbar;
