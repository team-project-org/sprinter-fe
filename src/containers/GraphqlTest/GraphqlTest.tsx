import React, { FunctionComponent } from "react";
import { CountriesSection } from "@/components/CountriesSection/CountriesSection";
import { SpacexSection } from "@/components/SpacexSection/SpacexSection";
import { StarWarsSection } from "@/components/StarWarsSection/StarWarsSection";
import { Button, Card } from "antd";
import ProjectList from "@/components/ProjectList";

interface IGraphqlTestProps {}

const GraphqlTest: FunctionComponent<IGraphqlTestProps> = (props) => {
	return (
		<div style={{ padding: 30 }}>
			<Button type="primary">Button</Button>
			<Card title="Card title" bordered={false} style={{ width: 300 }}>
				<p>Card content</p>
				<p>Card content</p>
				<p>Card content</p>
			</Card>
			<h1>React Multiple Apollo Clients</h1>
			<hr />
			<SpacexSection />
			<hr />
			<StarWarsSection />
			<hr />
			<CountriesSection />
		</div>
	);
};

export default GraphqlTest;
