AWS_ACCOUNT_ID=451947743362
AWS_REGION=us-east-1

build:
	cd web && pnpm build

deploy: build
	aws s3 sync ./web/dist s3://vrtxai-web --delete
	aws cloudfront create-invalidation \
  --distribution-id E30QCBG34D930A \
  --paths "/*"
