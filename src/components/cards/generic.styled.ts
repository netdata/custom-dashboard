import styled from "styled-components";
import { getColor } from "@netdata/netdata-ui";

export const CardContainer = styled.div<{ className?: string }>`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${getColor("mainBackground")};
  border-radius: 4px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 10px 20px rgba(0, 0, 0, 0.04);
`;
