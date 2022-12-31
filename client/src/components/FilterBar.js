import React, { useState } from 'react';
import FilterItem from './FilterItem';

const FilterBar = (props) => {
	return (
		<div
			style={{
				height: 50,
				width: '100%',
				display: 'flex',
				float: 'left',
				margin: '20px 20px 20px 20px',
				color: 'white',
			}}
		>
			<FilterItem
				filterSelects={props.filterSelects}
				setFilterSelects={props.setFilterSelects}
				title={'Nouns'}
				code={'NOUN'}
			/>
			<FilterItem
				filterSelects={props.filterSelects}
				setFilterSelects={props.setFilterSelects}
				title={'Verbs'}
				code={'VERB'}
			/>
			<FilterItem
				filterSelects={props.filterSelects}
				setFilterSelects={props.setFilterSelects}
				title={'Adverbs'}
				code={'ADVERB'}
			/>
			<FilterItem
				filterSelects={props.filterSelects}
				setFilterSelects={props.setFilterSelects}
				title={'Adjectives'}
				code={'ADJECTIVE'}
			/>
			<FilterItem
				filterSelects={props.filterSelects}
				setFilterSelects={props.setFilterSelects}
				title={'None'}
				code={'NONE'}
			/>
		</div>
	);
};

export default FilterBar;
