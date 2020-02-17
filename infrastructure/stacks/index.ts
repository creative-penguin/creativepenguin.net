#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { StaticSite, StaticSiteProps } from '@creativepenguin/cdk-static-site';
import config = require('config');


const app = new cdk.App();

const staticSiteProps: StaticSiteProps = {
   env: { account: config.get<string>('aws.accountID'), region: config.get<string>('aws.region') },
};

if (config.has('domain.name')) {
   staticSiteProps.domainName = config.get<string>('domain.name');
}

if (config.has('domain.subdomains')) {
   staticSiteProps.subdomains = config.get<string[]>('domain.subdomains');
}

new StaticSite(app, 'creativepenguin-net', staticSiteProps);
